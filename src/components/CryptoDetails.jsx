import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import { Row, Col, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, Trophy } from '@ant-design/icons'

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Option } = Select

const CryptoDetails = () => {
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  console.log(data)

  return (
    <div>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails