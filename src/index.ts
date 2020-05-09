 const curYear= new Date().getFullYear()
export function getCopyRightText(companyName: string) {
  return "©" + " " + companyName.toUpperCase()+" "+curYear
}
