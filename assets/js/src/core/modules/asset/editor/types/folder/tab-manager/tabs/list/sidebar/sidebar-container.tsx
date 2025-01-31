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

import React, { useMemo } from 'react'
import { Sidebar } from '@Pimcore/components/sidebar/sidebar'
import { type ISidebarEntry } from '@Pimcore/modules/element/sidebar/sidebar-manager'
import { Icon } from '@Pimcore/components/icon/icon'
import { GridConfig } from './grid-config/grid-config'
import { TagFiltersContainer } from './tag-filters/tag-filters-container'
import { FilterContainer } from './filters/filter-container'

export const SidebarContainer = (): React.JSX.Element => {
  const entries: ISidebarEntry[] = useMemo(() => [
    {
      key: 'filter',
      component: <FilterContainer />,
      icon: <Icon name="filter-outlined" />
    },

    {
      key: 'tags',
      component: <TagFiltersContainer />,
      icon: <Icon name="tag-two-tone" />
    },

    {
      key: 'grid-config',
      component: <GridConfig />,
      icon: <Icon name="settings-outlined" />
    }
  ], [])

  return useMemo(() => {
    console.log('rerendered')

    return (
      <Sidebar
        entries={ entries }
        sizing='large'
      />
    )
  }, [entries])
}
