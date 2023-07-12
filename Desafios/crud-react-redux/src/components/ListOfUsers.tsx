import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "overperforming@mail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "rickfer",
		email: "ricfer@mail.com",
		github: "rickferrodriguez",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakonda@mail.com",
		github: "haakonda",
	},
];

export default function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell className="flex items-center ">
                <img className=" w-[50px] h-[50px] rounded-full" src={`https://unavatar.io/github/${item.github}`} alt={item.name} />
              </TableCell>
							<TableCell >{item.name}</TableCell>
							<TableCell >{item.email}</TableCell>
							<TableCell >
								Acciones
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
