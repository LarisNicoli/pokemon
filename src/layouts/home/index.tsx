import { Header } from "../../components/Header";
import { Input } from "../../components/input";

export const Home = () => {
  return (
    <div className="h-full m-full bg-blue-100">
      <Header title="Pokédex">
        <Input onHandleSearch={() => {}} />
      </Header>
    </div>
  );
};
