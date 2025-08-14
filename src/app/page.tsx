import Chart from "@/modules/chart/ChartModule";
import Widget from "@/modules/Widget";


export default function Home() {
  return (
    <div className="font-sans p-4 md:p-8 flex flex-col gap-3 bg-[#fff] md:bg-[#fafafa] w-full">
        <Widget/>
        <Chart/>
    </div>
  );
}
