import Chart from "@/modules/chart/ChartModule";
import OnlinePayment from "@/modules/OnlinePayment";
import Widget from "@/modules/Widget";


export default function Home() {
  return (
    <div className="bg-[#fff] md:bg-[#fafafa] flex flex-col gap-3  w-full">
      <OnlinePayment/>
      <div className="font-sans p-4 md:p-8">
          <Widget/>
          <Chart/>
      </div>
    </div>

  );
}
