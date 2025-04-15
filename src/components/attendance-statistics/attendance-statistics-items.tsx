import { attendanceStatsConfig } from "./config"

export const AttendanceStatisticsItems = () => {
  return attendanceStatsConfig.map(statistic => {
    const Icon = statistic.icon
    return (
      <div className="flex items-center justify-center gap-3" key={statistic.description}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="text-2xl font-bold">{statistic.value}</div>
          <div className="text-xs text-muted-foreground">{statistic.description}</div>
        </div>
      </div>
    )
  })
}
