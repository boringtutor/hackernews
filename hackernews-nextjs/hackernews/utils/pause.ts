// type TimeType = {
//   time: number
// }

async function pause(time: any) {
    return await new Promise((resolve) => setTimeout(resolve, time))
  }
  