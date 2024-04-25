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
      <Table>
        <TableCaption>
          <div className="flex justify-evenly">
            <p className="px-6"> Major: Computer Science </p>
            <p className="px-6"> Minors: Mathematics, Statistics </p>
            <p className="px-6"> Cumulative GPA: 4.0 </p>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-left">Course Code</TableHead>
            <TableHead className="w-[300px] text-left">Course Name</TableHead>
            <TableHead className="w-[400px] text-left">
              Favorite Topics
            </TableHead>
            <TableHead className="w-[100px] text-right">Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left">COP3530</TableCell>
            <TableCell className="text-left">
              Data Structures & Algorithms
            </TableCell>
            <TableCell className="text-left">Heaps, Graphs, DP</TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">CDA3101</TableCell>
            <TableCell className="text-left">
              Intro to Computer Organization
            </TableCell>
            <TableCell className="text-left">
              ARMv8, Cache design, Parallel processing
            </TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">COP3504C</TableCell>
            <TableCell className="text-left">
              Advanced Programming Fundamentals
            </TableCell>
            <TableCell className="text-left">C++, Python, OOP, SFML</TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">STA3032</TableCell>
            <TableCell className="text-left">Engineering Statistics</TableCell>
            <TableCell className="text-left">
              Monte Carlo methods, Matrix regression
            </TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">MAS3114</TableCell>
            <TableCell className="text-left">
              Computational Linear Algebra
            </TableCell>
            <TableCell className="text-left">
              MATLAB, Markov chains, Differential equations
            </TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left">COT3100</TableCell>
            <TableCell className="text-left">
              Applications of Discrete Structures
            </TableCell>
            <TableCell className="text-left">
              Combinatorics, Mathematical proofs
            </TableCell>
            <TableCell className="text-right">A</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Coursework;
