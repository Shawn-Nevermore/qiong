import React from "react";

/** TreeShaking不适用于require，否则由于svg-sprite-loader的优化，
 * 会删除没用到的svg report（这时候会用诸如log的方式强行使用svg）
 */
// require("icons/tag.svg");
// require("icons/add.svg");
// require("icons/chart-pie.svg");

//  一劳永逸加载所有icon，可扩展性强
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string,
}
const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
}

export default Icon;
