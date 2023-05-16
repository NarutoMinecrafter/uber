'use client'
import { Col, Layout, Row, Timeline, Typography } from 'antd'
import styles from './styles.module.scss'
import Image from 'next/image'
import dryvan from '@/assets/images/dry-van.svg'
import reefer from '@/assets/images/reefer.svg'
import flatbed from '@/assets/images/flatbed.svg'
import ltl from '@/assets/images/ltl.svg'

const { Title, Text, Link } = Typography

export const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <Row>
        <Col className={styles.howWorks}>
          <Title level={2}>How it works</Title>
          <Text className={styles.text}>Enter your shipment details and email address to get quotes for the next 14 days, then log in or sign up to book through the Uber Freight Shipper Platform.</Text>
          <Timeline items={[
            {
              color: '#000',
              children: <>
                <Title level={5}>Flat rate quotes</Title>
                <Text>The freight quotes you’ll get are flat rates based on a shipment’s date, distance, and trailer type. These aren’t estimates, but actual market-based quotes you can book.</Text>
                <br />
                <Link>Learn more</Link>
              </>
            },
            {
              color: '#000',
              children: <>
                <Title level={5}>Book shipments instantly</Title>
                <Text>Booking at your quoted rate only takes a couple of clicks. If you don’t have an account, creating one takes less than 5 minutes.</Text>
              </>
            },
            {
              color: '#000',
              children: <>
                <Title level={5}>Get 24/7 support</Title>
                <Text>We’ll keep you updated from the moment the BOL is generated to the second the carrier uploads the POD.</Text>
              </>
            },
          ]} />
        </Col>
        <Col className={styles.support}>
          <Title>What type of freight do you support?</Title>
          <Text>Uber Freight currently offers full truck load shipments (FTL) for three trailer types, and less than truckload (LTL).</Text>
          <Link>Learn more</Link>
          <Row gutter={40}>
            <Col span={12}>
              <Image src={dryvan} alt='Dry Van' />
              <Title level={5}>Dry Van</Title>
              <Text>Use 53' dry vans to ship up to 26 standard pallets without temperature requirements</Text>
            </Col>
            <Col span={12}>
              <Image src={reefer} alt='Reefer' />
              <Title level={5}>Reefer</Title>
              <Text>Refrigerated food-grade trailers can carry any type of fresh, temperature-controlled produce</Text>
            </Col>
            <Col span={12}>
              <Image src={flatbed} alt='Flatbed' />
              <Title level={5}>Flatbed</Title>
              <Text>48' and 53' flatbed trailers are available when you don’t need the protection of an enclosed dry van</Text>
            </Col>
            <Col span={12}>
              <Image src={ltl} alt='LTL' />
              <Title level={5}>LTL</Title>
              <Text>Use less than truckload (LTL) when shipping a small quantity of goods that don’t require a full truck load</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  )
}