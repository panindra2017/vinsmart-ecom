const curYear = new Date().getFullYear();
interface IGetCopyRightText {
  name: string;
}
export function getCopyRightText(props: IGetCopyRightText) {
  return "©" + " " + props.name.toUpperCase() + " " + curYear;
}
