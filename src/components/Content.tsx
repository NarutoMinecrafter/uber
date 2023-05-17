import { useEffect, useState } from "react"
import { Button, Card, Col, Divider, Form, Input, Layout, Radio, Row, Select, Typography } from "antd"
import Image from "next/image"
import dayjs, { Dayjs } from 'dayjs'
import DateRangePicker from "tw-daterange"
import styles from './styles.module.scss'
import img from '@/assets/images/form.svg'
import { BaseOptionType } from "antd/es/select"


const { Title, Text, Link } = Typography

const radio = [
  {
    value: 'dry_van',
    label: 'Dry Van'
  },
  {
    value: 'reefer',
    label: 'Reefer'
  },
  {
    value: 'flatbed',
    label: 'Flatbed'
  },
]

const initialValues = { equipment: '', pickup: '', dropoff: '' }

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const Content = () => {
  const [options, setOptions] = useState<BaseOptionType[]>([])
  const [values, setValues] = useState(initialValues)
  const [email, setEmail] = useState('')
  const [calendar, setCalendar] = useState<any>()
  const [selected, setSelected] = useState<any>()
  const [form] = Form.useForm()
  const [emailForm] = Form.useForm()
  const isFull = Object.values(values).every(Boolean)
  const valuesString = Object.values(values).join()

  console.log(options)

  useEffect(() => {
    (async () => {
      const response = await fetch('https://severpomnit.pythonanywhere.com/cities');
      const json = await response.json();
      console.log(json)

      setOptions(json.map(({ id, name }: Record<'id' | 'name', string>) => ({ value: id, label: name })))
    })()
  }, [])

  useEffect(() => {
    if (email && isFull) {
      (async () => {
        const response = await fetch(`https://severpomnit.pythonanywhere.com/quote?from=${values.pickup}&to=${values.equipment}&type=${values.dropoff}&phone=${email}`);
        const json = await response.json();

        setCalendar(json.records)
      })()
    }
  }, [valuesString, isFull, values, email])

  const cellRender = (day: string, index: number) => {
    const date = dayjs(day).date()
    const current = new Date(day) >= new Date(selected?.start_date) && new Date(day) <= new Date(selected?.end_date)
    const color = calendar[day].price > 600000 ? styles.blue : calendar[day].price > 500000 ? styles.light : ''
    const price = selected?.price - calendar[day].price
    return <div
      className={current ? styles.selected : selected ? '' : color}
      onClick={(() => setSelected((prevSelected: any) => prevSelected ? undefined : calendar[day]))}
    >
      <div>
        <Title level={4}>{(index === 0 || date === 1) && dayjs(day).format('MMM')} {date}</Title>
        {(!selected || current) ? <Text>{calendar[day].price} {calendar[day].currency}</Text> : <Text className={price < 0 ? styles.green : styles.red}>{price} {calendar[day].currency}</Text>}
      </div>
    </div>
  }

  return (
    <Layout.Content>
      <Card className={styles.content} bordered={false}>
        <Row gutter={[50, 50]}>
          <Col span={12}>
            <Title level={1}>Get an instant Uber Freight quote</Title>
            <Text className={styles.text}>Enter details to get flat rate shipping quotes for the next 14 days. No signup required.</Text>
            <Image src={img} alt='Image' />
          </Col>
          <Col span={12}>
            <Form layout='vertical' className={styles.form} form={form} initialValues={initialValues} onFinish={setValues}>
              <Form.Item label='Equipment type' name="equipment" rules={[{ required: true }]}>
                <Radio.Group className={styles.radio} options={radio} optionType="button" buttonStyle="solid" />
              </Form.Item>
              <Form.Item label='Pickup location' name="pickup" rules={[{ required: true }]}>
                <Select
                  showSearch
                  options={options}
                  placeholder='ZIP code or city name'
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
              </Form.Item>
              <Form.Item label='Dropoff location' name="dropoff" rules={[{ required: true }]}>
                <Select
                  showSearch
                  options={options}
                  placeholder='ZIP code or city name'
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
              </Form.Item>
              <Text>This site is protected by reCAPTCHA and the Google <Link>Privacy Notice</Link> and <Link>Terms of Service</Link> apply to reCAPTCHA.</Text>
              <Button className={styles.button} type='primary' htmlType='submit'>Get freight quote</Button>
            </Form>
          </Col>
          {isFull && <Col span={24}>
            {calendar ? <>
              <Row>
                <Col span={20}>
                  <Title level={4}>Select shipment dates</Title>
                </Col>
                <Col span={4}>
                  <Title className={styles.refresh} level={5}>Refresh dates</Title>
                </Col>
              </Row>
              <div className={styles.calendar}>
                {days.map((day) => <Text key={day}>{day}</Text>)}
                {Object.keys(calendar).map(cellRender)}
              </div>
              <Text className={styles.text2}>Rates update frequently to reflect market conditions and aren't guaranteed until you book.</Text>
              <Divider />
              {selected && <Row>
                <Col span={20}>
                  <Text className={styles.text3}>Shipment distance: <b>{selected.distance}</b> I Minimum transit time: <b>{selected.delivery_time}</b></Text>
                </Col>
                <Col span={4}>
                  <Button className={styles.button} type='primary'>Sign up to book</Button>
                </Col>
              </Row>}
            </> : <Form className={styles.email} form={emailForm} onFinish={({ email }) => setEmail(email)}>
              <Title level={4}>Enter your email to see quotes</Title>
              <Text>We’ll let you know when there’s a rate change in your lane that might interest you. Unsubscribe at any time.</Text>
              <Form.Item name="email">
                <Input type='email' placeholder='email@example.com' />
              </Form.Item>
              <Text className={styles.buttonLabel}>By clicking “See quotes”, I agree that my information will be used in accordance with Uber Freight’s <Link>Privacy Notice</Link>.</Text>
              <Button type='primary' htmlType='submit'>See quotes</Button>
            </Form>}
          </Col>}
        </Row>
      </Card>
    </Layout.Content >
  )
}