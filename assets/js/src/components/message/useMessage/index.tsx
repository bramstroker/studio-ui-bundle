import { message } from 'antd'
import { type ArgsProps, type ConfigOptions, type MessageInstance, type MessageType } from 'antd/es/message/interface'
import { Icon } from '@Pimcore/components/icon/icon'
import React from 'react'

export const useMessage = (messageConfig?: ConfigOptions): readonly [MessageInstance, React.ReactElement] => {
  const [messageApi, contextHolder] = message.useMessage(messageConfig)

  messageApi.open = (config: ArgsProps): MessageType => {
    if (config.type === 'info') {
      return message.open({
        icon: <Icon name={'info-circle-filled'} options={{ width: '16px', height: '16px' }} />,
        ...config
      })
    }

    return message.open(config)
  }

  return [messageApi, contextHolder]
}
