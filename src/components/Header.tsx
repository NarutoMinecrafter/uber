'use client'
import { Col, Layout, Menu, Row, Typography } from 'antd'
import styles from './styles.module.scss'
import useMedia from 'use-media'

const { Title, Link } = Typography

const title = <Title level={4}>Shipper</Title>

const links = [
  <Link>Self-service</Link>,
  <Link>Get a quote</Link>,
  <Link>Enterprise</Link>,
  <Link>Testimonials</Link>,
  <Link>FAQ</Link>
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