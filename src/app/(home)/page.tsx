import { AttendanceCalendar } from "@/components/attendance-calendar";
import { AttendanceStatistics } from "@/components/attendance-statistics";
import { HelloCard } from "@/components/hello-card";
import { ModalitiesTabs } from "@/components/modalities-tabs";
import { SummaryProgressChart } from "@/components/progress-chart/summary-progress-chart";
import { ScheduleOverview } from "@/components/schedule-overview";

export default function Home() {
  return (
    <div className="flex flex-1 flex-wrap gap-4 p-4 h-full">
      <div className="flex-col gap-4 w-full xl:max-w-md flex">
        <HelloCard />
        <ModalitiesTabs />
      </div>
      <div className="flex-1 flex-col gap-4 flex">
        <AttendanceStatistics />
        <div className="flex flex-wrap gap-4">
          <AttendanceCalendar />
          <ScheduleOverview />
        </div>
        <SummaryProgressChart />
      </div>
    </div>
  )
}
