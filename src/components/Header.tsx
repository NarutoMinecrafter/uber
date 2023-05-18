'use client'
import { Col, Layout, Menu, Row, Typography } from 'antd'
import styles from './styles.module.scss'
import useMedia from 'use-media'

const { Title, Link } = Typography

const title = <Title level={4}>Shipper</Title>

const links = [
  <Link key={"Self-service"}>Self-service</Link>,
  <Link key={"Get a quote"}>Get a quote</Link>,
  <Link key={"Enterprise"}>Enterprise</Link>,
  <Link key={"Testimonials"}>Testimonials</Link>,
  <Link key={"FAQ"}>FAQ</Link>
]
const items = [{ label: title, key: 'menu', children: links.map((link) => ({ type: 'group', label: link })) }]

export const Header = () => {
  const isDesctop = useMedia({ minWidth: 600 });

  return (
    <Layout.Header className={styles.header}>
      <Row className={styles.headerContent}>
        <Col flex="auto" className={styles.logoText}>
          {isDesctop ? title : <Menu items={items} />}
        </Col>
        <Col className={styles.links}>
          {isDesctop && links}
        </Col>
      </Row>
    </Layout.Header>
  )
}