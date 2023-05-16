import { Button, Calendar, Card, Col, Form, Input, Layout, Radio, Row, Select, Typography } from "antd"
import Image from "next/image"
import { Dayjs } from 'dayjs'
import styles from './styles.module.scss'
import img from '@/assets/images/form.svg'
import { useEffect, useState } from "react"
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

export const Content = () => {
  const [options, setOptions] = useState<BaseOptionType[]>([])
  const [values, setValues] = useState(initialValues)
  const [email, setEmail] = useState('')
  const [calendar, setCalendar] = useState<any>()
  const [form] = Form.useForm()
  const [emailForm] = Form.useForm()
  const isFull = Object.values(values).every(Boolean)
  const valuesString = Object.values(values).join()

  useEffect(() => {
    (async () => {
      const response = await fetch('https://severpomnit.pythonanywhere.com/cities', { mode: 'no-cors' });
      // const json = await response.json();
      const json = [
        {
          "id": "almaty",
          "name": "Алматы"
        },
        {
          "id": "astana",
          "name": "Астана"
        },
        {
          "id": "shymkent",
          "name": "Шымкент"
        },
        {
          "id": "karaganda",
          "name": "Караганда"
        },
        {
          "id": "taraz",
          "name": "Тараз"
        },
        {
          "id": "kokshetau",
          "name": "Кокшетау"
        }
      ]

      setOptions(json.map(({ id, name }: Record<'id' | 'name', string>) => ({ value: id, label: name })))
    })()
  }, [])

  useEffect(() => {
    if (email && isFull) {
      (async () => {
        const response = await fetch(`https://severpomnit.pythonanywhere.com/quote?from=${values.pickup}&to=${values.equipment}&type=${values.dropoff}&phone=${email}`, { mode: 'no-cors' });
        // const json = await response.json();
        const json = {
          "freight_type": "dry_van",
          "from": "almaty",
          "phone": "77072125198",
          "records": {
            "2023-05-17": {
              "currency": "KZT",
              "delivery_time": "10 часов в пути",
              "distance": "703 км",
              "end_date": "2023-05-19T00:46:44.735068",
              "price": 581343,
              "start_date": "2023-05-17"
            },
            "2023-05-18": {
              "currency": "KZT",
              "delivery_time": "13 часов в пути",
              "distance": "1154 км",
              "end_date": "2023-05-21T00:46:44.738185",
              "price": 475820,
              "start_date": "2023-05-18"
            },
            "2023-05-19": {
              "currency": "KZT",
              "delivery_time": "18 часов в пути",
              "distance": "1117 км",
              "end_date": "2023-05-20T00:46:44.738327",
              "price": 492445,
              "start_date": "2023-05-19"
            },
            "2023-05-20": {
              "currency": "KZT",
              "delivery_time": "14 часов в пути",
              "distance": "1127 км",
              "end_date": "2023-05-23T00:46:44.738344",
              "price": 458138,
              "start_date": "2023-05-20"
            },
            "2023-05-21": {
              "currency": "KZT",
              "delivery_time": "13 часов в пути",
              "distance": "814 км",
              "end_date": "2023-05-24T00:46:44.738356",
              "price": 505325,
              "start_date": "2023-05-21"
            },
            "2023-05-22": {
              "currency": "KZT",
              "delivery_time": "15 часов в пути",
              "distance": "702 км",
              "end_date": "2023-05-24T00:46:44.738370",
              "price": 578900,
              "start_date": "2023-05-22"
            },
            "2023-05-23": {
              "currency": "KZT",
              "delivery_time": "13 часов в пути",
              "distance": "639 км",
              "end_date": "2023-05-26T00:46:44.738382",
              "price": 466557,
              "start_date": "2023-05-23"
            },
            "2023-05-24": {
              "currency": "KZT",
              "delivery_time": "17 часов в пути",
              "distance": "846 км",
              "end_date": "2023-05-25T00:46:44.738409",
              "price": 498934,
              "start_date": "2023-05-24"
            },
            "2023-05-25": {
              "currency": "KZT",
              "delivery_time": "19 часов в пути",
              "distance": "1157 км",
              "end_date": "2023-05-27T00:46:44.738424",
              "price": 463101,
              "start_date": "2023-05-25"
            },
            "2023-05-26": {
              "currency": "KZT",
              "delivery_time": "15 часов в пути",
              "distance": "740 км",
              "end_date": "2023-05-28T00:46:44.738555",
              "price": 480838,
              "start_date": "2023-05-26"
            },
            "2023-05-27": {
              "currency": "KZT",
              "delivery_time": "11 часов в пути",
              "distance": "665 км",
              "end_date": "2023-05-28T00:46:44.738573",
              "price": 458154,
              "start_date": "2023-05-27"
            },
            "2023-05-28": {
              "currency": "KZT",
              "delivery_time": "11 часов в пути",
              "distance": "1204 км",
              "end_date": "2023-05-29T00:46:44.738585",
              "price": 569241,
              "start_date": "2023-05-28"
            },
            "2023-05-29": {
              "currency": "KZT",
              "delivery_time": "15 часов в пути",
              "distance": "686 км",
              "end_date": "2023-06-01T00:46:44.738596",
              "price": 582442,
              "start_date": "2023-05-29"
            },
            "2023-05-30": {
              "currency": "KZT",
              "delivery_time": "16 часов в пути",
              "distance": "875 км",
              "end_date": "2023-06-02T00:46:44.738607",
              "price": 485272,
              "start_date": "2023-05-30"
            },
            "2023-05-31": {
              "currency": "KZT",
              "delivery_time": "17 часов в пути",
              "distance": "621 км",
              "end_date": "2023-06-03T00:46:44.738618",
              "price": 566669,
              "start_date": "2023-05-31"
            },
            "2023-06-01": {
              "currency": "KZT",
              "delivery_time": "14 часов в пути",
              "distance": "571 км",
              "end_date": "2023-06-04T00:46:44.738628",
              "price": 460185,
              "start_date": "2023-06-01"
            },
            "2023-06-02": {
              "currency": "KZT",
              "delivery_time": "12 часов в пути",
              "distance": "1208 км",
              "end_date": "2023-06-05T00:46:44.738651",
              "price": 506026,
              "start_date": "2023-06-02"
            },
            "2023-06-03": {
              "currency": "KZT",
              "delivery_time": "15 часов в пути",
              "distance": "939 км",
              "end_date": "2023-06-05T00:46:44.738661",
              "price": 553033,
              "start_date": "2023-06-03"
            },
            "2023-06-04": {
              "currency": "KZT",
              "delivery_time": "10 часов в пути",
              "distance": "882 км",
              "end_date": "2023-06-06T00:46:44.738672",
              "price": 451250,
              "start_date": "2023-06-04"
            },
            "2023-06-05": {
              "currency": "KZT",
              "delivery_time": "10 часов в пути",
              "distance": "1045 км",
              "end_date": "2023-06-08T00:46:44.738682",
              "price": 590663,
              "start_date": "2023-06-05"
            },
            "2023-06-06": {
              "currency": "KZT",
              "delivery_time": "13 часов в пути",
              "distance": "1201 км",
              "end_date": "2023-06-09T00:46:44.738692",
              "price": 541409,
              "start_date": "2023-06-06"
            },
            "2023-06-07": {
              "currency": "KZT",
              "delivery_time": "17 часов в пути",
              "distance": "1032 км",
              "end_date": "2023-06-08T00:46:44.738703",
              "price": 518911,
              "start_date": "2023-06-07"
            },
            "2023-06-08": {
              "currency": "KZT",
              "delivery_time": "16 часов в пути",
              "distance": "1096 км",
              "end_date": "2023-06-11T00:46:44.738715",
              "price": 468769,
              "start_date": "2023-06-08"
            },
            "2023-06-09": {
              "currency": "KZT",
              "delivery_time": "11 часов в пути",
              "distance": "1144 км",
              "end_date": "2023-06-10T00:46:44.738725",
              "price": 475128,
              "start_date": "2023-06-09"
            },
            "2023-06-10": {
              "currency": "KZT",
              "delivery_time": "17 часов в пути",
              "distance": "1188 км",
              "end_date": "2023-06-11T00:46:44.738737",
              "price": 500836,
              "start_date": "2023-06-10"
            },
            "2023-06-11": {
              "currency": "KZT",
              "delivery_time": "12 часов в пути",
              "distance": "948 км",
              "end_date": "2023-06-13T00:46:44.738754",
              "price": 532146,
              "start_date": "2023-06-11"
            },
            "2023-06-12": {
              "currency": "KZT",
              "delivery_time": "18 часов в пути",
              "distance": "1056 км",
              "end_date": "2023-06-15T00:46:44.738765",
              "price": 571906,
              "start_date": "2023-06-12"
            },
            "2023-06-13": {
              "currency": "KZT",
              "delivery_time": "10 часов в пути",
              "distance": "710 км",
              "end_date": "2023-06-16T00:46:44.738775",
              "price": 601271,
              "start_date": "2023-06-13"
            }
          },
          "to": "astana"
        }

        setCalendar(json.records)
      })()
    }
  }, [valuesString, isFull, values, email])

  const cellRender = (date: Dayjs) => {
    const current = calendar[date.format("YYYY-MM-DD")]
    return current ? <Text className={styles.date}>{current?.price} {current?.currency}</Text> : ''
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
              <Button type='primary' htmlType='submit'>Get freight quote</Button>
            </Form>
          </Col>
          {isFull && <Col span={24}>
            {calendar ? <>
              <Title level={4}>Select shipment dates</Title>
              <Calendar cellRender={cellRender} />
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
    </Layout.Content>
  )
}