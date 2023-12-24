import React from "react";
import {
  Image,
  ImageContentFit,
  ImageSource,
  ImageStyle,
  ImageTransition,
  ImageProps
} from "expo-image";


interface Props extends ImageProps {
  source: string | { uri: string } | number;
  style?: ImageStyle | ImageStyle[];
  transition?: number | ImageTransition | null | undefined;
  contentFit?: ImageContentFit;
  [otherProps: string]: any;
}

const AppImage: React.FC<Props> = ({
  source,
  style = { width: "100%", height: 200, borderRadius: 4 },
  transition = 200,
  contentFit = "cover",
  ...otherProps
}) => {
  return (
    <Image
      style={style}
      source={source}
      cachePolicy="memory-disk"
      contentFit={contentFit}
      transition={transition}
      recyclingKey={
        'unknown_993829'
      }
      // onLoadEnd={()=>console.log("image loaded")}
      {...otherProps}
    />
  );
};

export default AppImage;
