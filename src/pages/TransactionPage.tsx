const TransactionPage = () => {
  return (
    <div>
      <div className="w-full h-[200px] bg-primary absolute left-0 top-0 -z-20"></div>
      <div className="rounded-md overflow-hidden h-[80vh]">
        <div className="bg-background p-3">
          <p className="font-bold text-xl">Subscription History</p>
        </div>
        <div className="bg-secondary p-3 grid grid-cols-3 text-center font-bold">
          <p>S.No</p>
          <p>Subscription</p>
        </div>
        <div className="bg-foreground p-3 h-full overflow-y-auto"></div>
      </div>
    </div>
  )
}
export default TransactionPage