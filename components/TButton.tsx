type Props = Readonly<{
  children: React.ReactNode;
}>

export default function TButton ({children}: Props) {
  return (
    <button className={`bg-green-500 rounded-md py-1 px-3 text-slate-100 shadow-md`}>
      {children}
    </button>
  )
}