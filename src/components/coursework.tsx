import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Coursework() {
  return (
    <>
      <Table className="sm:text-base text-[11px]">
        <TableCaption>
          <div className="flex justify-evenly">
            <p className="sm:px-6 px-3"> Major: Computer Science </p>
            <p className="sm:px-6 px-3"> Minors: Mathematics, Statistics </p>
            <p className="sm:px-6 px-3"> Cumulative GPA: 4.0 </p>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="sm:w-[150px] w-[50px] text-left">
              Course Code
            </TableHead>
            <TableHead className="sm:w-[300px] w-[200px] text-left">
              Course Name
            </TableHead>
            <TableHead className="w-[400px] text-left max-sm:hidden">
              Favorite Topics
            </TableHead>
            <TableHead className="sm:w-[100px] w-[0px] text-right max-sm:hidden">
              Grade
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left">COP3530</TableCell>
            <TableCell className="text-left">
              Data Structures & Algorithms
            </TableCell>
            <TableCell className="text-left max-sm:hidden">
              Heaps, Graphs, DP
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">CDA3101</TableCell>
            <TableCell className="text-left">
              Intro to Computer Organization
            </TableCell>
            <TableCell className="text-left max-sm:hidden">
              ARMv8, Cache design, Parallel processing
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">COP3504C</TableCell>
            <TableCell className="text-left">
              Advanced Programming Fundamentals
            </TableCell>
            <TableCell className="text-left max-sm:hidden">
              C++, Python, OOP, SFML
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">STA3032</TableCell>
            <TableCell className="text-left">Engineering Statistics</TableCell>
            <TableCell className="text-left max-sm:hidden">
              Monte Carlo methods, Matrix regression
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">MAS3114</TableCell>
            <TableCell className="text-left">
              Computational Linear Algebra
            </TableCell>
            <TableCell className="text-left max-sm:hidden">
              MATLAB, Markov chains, Differential equations
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">COT3100</TableCell>
            <TableCell className="text-left">
              Applications of Discrete Structures
            </TableCell>
            <TableCell className="text-left max-sm:hidden">
              Combinatorics, Mathematical proofs
            </TableCell>
            <TableCell className="text-right max-sm:hidden">A</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Coursework;
