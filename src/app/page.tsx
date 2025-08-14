import Chart from "@/modules/chart/ChartModule";
import Widget from "@/modules/Widget";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans p-4 md:p-8 flex flex-col gap-3 bg-[#fafafa]">
        <Widget/>
        <Chart/>
    </div>
  );
}
