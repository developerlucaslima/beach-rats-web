
export default function Home() {
  // const playerId = '1234xx'
  // const {
  //   data: playerProfileData,
  //   isLoading: isPlayerProfileLoading,
  //   isError: isPlayerProfileError
  // } = useQuery({
  //   queryKey: ['player-profile', playerId],
  //   queryFn: () => getPlayerProfile({ playerId })
  // })

  return (
    <div className="grid flex-1 grid-cols-1 md:grid-cols-3 grid-rows-6 gap-4 p-4">
      <div className="md:col-span-2 md:row-span-3 bg-blue-100 p-4">
        Component 1
      </div>

      <div className="md:col-start-3 md:row-span-4 bg-green-100 p-4">
        Component 3
      </div>

      <div className="md:col-span-2 md:row-span-3 bg-yellow-100 p-4">
        Component 2
      </div>

      <div className="md:col-start-3 md:row-span-2 bg-red-100 p-4">
        Component 4
      </div>
    </div>
  )
}
