
interface Student {
  name: string
}

const Student  = (props: Student) => {
  return (
    <div title="ola">
      Olá, {props.name}
    </div>
  );
}

export default Student;