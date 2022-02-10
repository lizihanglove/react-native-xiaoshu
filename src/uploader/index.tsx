import React, { isValidElement } from 'react'
import { View, Text, Image } from 'react-native'

import { PlusOutline } from '../icon'
import { useTheme, widthStyle } from '../theme'

import UploaderImage from './image'
import type { UploaderProps, UploaderValue } from './interface'
import { createStyles } from './style'

/**
 * Uploader 文件上传
 */
const Uploader = <T extends UploaderValue>({
  list,
  maxCount = Number.MAX_SAFE_INTEGER,
  imageComponent = Image,
  deletable = true,
  showUpload = true,
  uploadText = '图片',
  uploadIcon,
  onPressUpload,
  imageSize = 80,
  imageGap,
  onPressImage,
  onPressDelete,
  onPressError,
}: UploaderProps<T>) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const genOnPressDelete = (item: T, index: number) => () => {
    onPressDelete?.(item, index, list)
  }
  const genOnPressImage = (item: T, index: number) => () => {
    const onPressCallback =
      item.status === 'error' ? onPressError : onPressImage

    onPressCallback?.(item, index, list)
  }

  return (
    <View style={STYLES.uploader}>
      {list.map((item, index) => {
        return (
          <UploaderImage
            key={item.key}
            filepath={item.filepath}
            status={item.status}
            imageComponent={imageComponent}
            deletable={deletable}
            size={imageSize}
            gap={imageGap}
            onPress={genOnPressImage(item, index)}
            onPressDelete={genOnPressDelete(item, index)}
          />
        )
      })}

      {showUpload && list.length < maxCount ? (
        <UploaderImage
          isUpload
          size={imageSize}
          gap={imageGap}
          onPress={onPressUpload}>
          {isValidElement(uploadIcon) ? (
            uploadIcon
          ) : (
            <PlusOutline
              color={THEME_VAR.uploader_upload_text_color}
              pointerEvents="none"
            />
          )}
          <Text style={STYLES.upload_text}>{uploadText}</Text>
        </UploaderImage>
      ) : null}
    </View>
  )
}

export default Uploader
