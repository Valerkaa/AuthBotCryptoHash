import { Layout, Menu, Button } from 'antd';
import { UserOutlined, KeyOutlined, PlusCircleOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginPage from '../pages/auth/LoginPage';
import ChangePasswordPage from '../pages/auth/ChangePasswordPage';
import AddTokenPage from '../pages/tokens/AddTokenPage';

const { Header, Content, Footer, Sider } = Layout;

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/*" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
          
              {/* Мобильное меню */}
              {menuOpen && (
                <div className="mobile-menu">
                  <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} onClick={() => setMenuOpen(false)}>
                    <Menu.Item key="1" icon={<KeyOutlined />}>
                      <Link to="/change-password">Change Password</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<PlusCircleOutlined />}>
                      <Link to="/add-token">Add Token</Link>
                    </Menu.Item>
                  </Menu>
                </div>
              )}
              {/* Сайдбар для десктопов */}
              <Sider theme="dark" breakpoint="md" collapsedWidth="0" className="desktop-menu">
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1" icon={<KeyOutlined />}>
                    <Link to="/change-password">Change Password</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<PlusCircleOutlined />}>
                    <Link to="/add-token">Add Token</Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: '#000', color: '#fff', textAlign: 'center' }}>
                  Crypto Hash
                </Header>
                <Content style={{ margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Routes>
                    <Route path="/change-password" element={<ChangePasswordPage />} />
                    <Route path="/add-token" element={<AddTokenPage />} />
                  </Routes>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#000', color: '#fff' }}>
                  Crypto Hash ©2025
                </Footer>
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppLayout;