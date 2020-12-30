import { Table } from "antd";
import React from "react";

const columns = [
    {
        title: "메뉴",
        dataIndex: "메뉴",
        key: "메뉴"
    },
    {
        title: "가격",
        dataIndex: "가격",
        key: "가격"
    }
];

const Menu = (props) => {
    return (
        <div>
            <Table dataSource={props.menu} columns={columns} rowKey={"메뉴"} />
            {/* <table>
                {props.menu.map((item) => (
                    <tr key={item[0]}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                    </tr>
                ))}
            </table> */}
        </div>
    );
};

Menu.getInitialProps = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/menu");
    const menu = await response.json();
    return {
        menu
    };
};

export default Menu;
