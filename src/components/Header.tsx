'use client'
import { Col, Layout, Row, Typography } from 'antd'
import styles from './styles.module.scss'

const { Title, Link } = Typography

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Row className={styles.headerContent}>
        <Col flex="auto" className={styles.logoText}>
          <Title level={4}>Shipper</Title>
        </Col>
        <Col className={styles.links}>
          <Link>Self-service</Link>
          <Link>Get a quote</Link>
          <Link>Enterprise</Link>
          <Link>Testimonials</Link>
          <Link>FAQ</Link>
        </Col>
      </Row>
    </Layout.Header>
  )
}