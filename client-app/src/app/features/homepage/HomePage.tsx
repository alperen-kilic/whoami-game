import JoinForm from "../../common/join-form/JoinForm";
import Avatar from "../../common/ui/avatar/Avatar";
import Card from "../../common/ui/card/Card";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto">
      <Card centered>
        <Avatar width={140} height={140} />
        <JoinForm />
      </Card>
    </main>
  );
}
