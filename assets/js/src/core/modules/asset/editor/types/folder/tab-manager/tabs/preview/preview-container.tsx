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

import { useAssetGetTreeQuery } from '@Pimcore/modules/asset/asset-api-slice-enhanced'
import React, { useContext, useMemo, useState } from 'react'
import { GridToolbarContainer } from '../list/toolbar/grid-toolbar-container'
import { FlexContainer } from '@Pimcore/modules/asset/editor/types/folder/tab-manager/tabs/preview/flex-container'
import { useAssetDraft } from '@Pimcore/modules/asset/hooks/use-asset-draft'
import { AssetContext } from '@Pimcore/modules/asset/asset-provider'
import { ContentToolbarSidebarLayout } from '@Pimcore/components/content-toolbar-sidebar-layout/content-toolbar-sidebar-layout'

const PreviewContainer = (): React.JSX.Element => {
  const assetContext = useContext(AssetContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const assetId = assetContext.id!
  const { asset } = useAssetDraft(assetId)

  const { data } = useAssetGetTreeQuery({
    pathIncludeDescendants: true,
    page: currentPage,
    pageSize,
    excludeFolders: true,
    path: asset?.fullPath
  })

  const total = data?.totalItems ?? 0

  function onPagerChange (page: number, pageSize: number): void {
    setCurrentPage(page)
    setPageSize(pageSize)
  }

  return useMemo(() => (
    <>
      { data !== undefined && (
        <ContentToolbarSidebarLayout
          renderToolbar={
            <GridToolbarContainer
              pager={ {
                current: currentPage,
                total,
                pageSize,
                onChange: onPagerChange
              } }
            />
          }
        >
          <FlexContainer assets={ data } />
        </ContentToolbarSidebarLayout>
      )}
    </>
  ), [currentPage, pageSize, data])
}

export { PreviewContainer }
