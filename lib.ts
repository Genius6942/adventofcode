export const loadInput = async (year: number, problem: number) => {
  return await fetch(`https://adventofcode.com/${year}/day/${problem}/input`, {
    headers: {
      Cookie:
        "session=53616c7465645f5f4a276ae50de4c9e8b1a1cd2d3d7f2bb3a0e0b30dc87c8a125131f242ca57efcf271ce3105c8ff967878e563b993a8ee7012717b727379b10",
    },
  }).then((res) => res.text());
};
