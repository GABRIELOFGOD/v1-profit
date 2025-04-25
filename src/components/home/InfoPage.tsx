import InfoCard from "./InfoCard"

const InfoPage = () => {
  return (
    <div className="bg-secondary rounded-md p-5 flex flex-col gap-5">
      <p className="text-lg font-bold md:text-xl">Info</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InfoCard
          title="Total Direct"
          content={<p className="text-3xl font-extrabold">30</p>}
        />
        <InfoCard
          title="Total Downlines"
          content={<p className="text-3xl font-extrabold">30</p>}
        />
        <InfoCard
          title="Total Business"
          content={<p className="text-3xl font-extrabold">30</p>}
        />
        <InfoCard
          title="Team Earnings"
          content={<p className="text-3xl font-extrabold">30</p>}
        />
        <InfoCard
          title="Award Earnings"
          content={<p className="text-3xl font-extrabold">30</p>}
        />
      </div>
      
    </div>
  )
}
export default InfoPage