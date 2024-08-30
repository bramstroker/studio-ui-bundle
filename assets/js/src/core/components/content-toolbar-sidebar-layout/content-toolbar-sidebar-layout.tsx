/**
* Pimcore
*
* This source file is available under two different licenses:
* - Pimcore Open Core License (POCL)
* - Pimcore Commercial License (PCL)
* Full copyright and license information is available in
* LICENSE.md which is distributed with this source code.
*
*  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
*  @license    https://github.com/pimcore/studio-ui-bundle/blob/1.x/LICENSE.md POCL and PCL
*/

import React, { memo, type ReactNode } from 'react'
import { useStyles } from './content-toolbar-sidebar-layout.styles'
import { Content } from '../content/content'

interface ContentToolbarViewProps {
  children: ReactNode
  renderToolbar?: ReactNode
  renderSidebar?: ReactNode
}

const Component = (props: ContentToolbarViewProps): React.JSX.Element => {
  const { styles } = useStyles()
  const classes = ['content-toolbar-sidebar-layout', styles.ContentToolbarSidebarLayout]

  if (props.renderToolbar !== undefined) {
    classes.push('content-toolbar-sidebar-layout--with-toolbar')
  }

  return (
    <div className={ classes.join(' ') }>
      <Content className='content-toolbar-sidebar-layout__content'>
        {props.children}
      </Content>

      { props.renderToolbar !== undefined && (
        <div className='content-toolbar-sidebar-layout__toolbar'>
          {props.renderToolbar}
        </div>
      )}

      { props.renderSidebar !== undefined && (
        <div className='content-toolbar-sidebar-layout__sidebar'>
          {props.renderSidebar}
        </div>
      )}
    </div>
  )
}

export const ContentToolbarSidebarLayout = memo(Component)
