
type TopBarProps = {
    title: string
}

const TopBar = ({title}: TopBarProps) => {
  return (
    <div className="bg-gradient-mclaren p-4">
        <h1 className="text-4xl text-center font-bold">{title}</h1>
    </div>
  )
}

export default TopBar