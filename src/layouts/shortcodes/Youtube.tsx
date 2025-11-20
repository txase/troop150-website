import React from "react";
import LiteYouTubeEmbed from "@ibrahimcesar/react-lite-youtube-embed";
import "@ibrahimcesar/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  return (
    <LiteYouTubeEmbed
      wrapperClass="yt-lite rounded-lg"
      id={id}
      title={title}
      {...rest}
    />
  );
};

export default Youtube;
