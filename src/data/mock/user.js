import Mock from 'mockjs'
import mockData from './data'

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock(/\/api\/blade-auth\/token/, 'post', () => {
        return mockData.token
    });
    Mock.mock(/\/api\/blade-system\/menu\/routes/, 'get', () => {
        return mockData.menu
    });
    Mock.mock(/\/api\/blade-system\/menu\/buttons/, 'get', () => {
        return mockData.buttons
    });

    // 用户登录
    Mock.mock('/user/login', 'post', {
        data: new Date().getTime() + ''
    });
    //用户退出
    Mock.mock('/user/logout', 'get', {
        data: true,
    });
    //刷新token
    Mock.mock('/user/refesh', 'post', {
        data: new Date().getTime() + ''
    });

    //获取表格数据
    Mock.mock('/user/getTable', 'get', () => {
        let list = []
        for (let i = 0; i < 5; i++) {
            list.push(Mock.mock({
                id: '@increment',
                name: Mock.mock('@cname'),
                username: Mock.mock('@last'),
                type: [0, 2],
                checkbox: [0, 1],
                'number|0-100': 0,
                datetime: 1532932422071,
                'sex|0-1': 0,
                moreselect: [0, 1],
                "grade": 0,
                address: Mock.mock('@cparagraph(1, 3)'),
                check: [1, 3, 4]
            }))
        }
        return {
            data: {
                total: 11,
                pageSize: 10,
                tableData: list
            }
        }
    })
}
