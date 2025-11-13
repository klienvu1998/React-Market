import './styles.css';
import reactLogo from '../../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Badge, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { doLogoutAction } from '../../redux/accountSlice';

const Header = () => {
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const navigate = useNavigate()
    const user = useSelector(state => state.account.user)
    const dispatch = useDispatch()

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Manage Account
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => {
                    dispatch(doLogoutAction())
                    navigate('/')
                }}>
                    Logout
                </a>
            ),
            danger: true,
        },
    ];

    return (
        <>
            <nav>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a href='#' style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src={reactLogo}></img>
                        <span>HyVH</span>
                    </a>

                    <div style={{ display: 'flex', flexGrow: '1', flexShrink: '1', marginLeft: '10px', marginRight: '10px' }}>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <img src={reactLogo} style={{ position: 'absolute', left: '10px' }}></img>
                        </div>
                        <input type='text' placeholder="Bạn tìm gì hôm nay" className='search-input'></input>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge count={5} size={"small"}>
                            <FiShoppingCart style={{ width: '20px', height: '20px' }}></FiShoppingCart>
                        </Badge>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px', gap: 10 }}>
                        <div>{!isAuthenticated ? <span onClick={() => navigate('/login')}>Login</span> :
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Space>Welcome {user?.fullName}<DownOutlined /></Space>
                            </Dropdown>}</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header 