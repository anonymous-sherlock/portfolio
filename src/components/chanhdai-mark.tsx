export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 64H64V0h64v64ZM64 256H0V64h64v192ZM192 256h-64V64h64v192ZM128 192H64v-64h64v64ZM320 192H256V0h64v192ZM448 256H320v-64h128v64Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="${color}" d="M128 64H64V0h64v64ZM64 256H0V64h64v192ZM192 256h-64V64h64v192ZM128 192H64v-64h64v64ZM320 192H256V0h64v192ZM448 256H320v-64h128v64Z"/></svg>`
}
