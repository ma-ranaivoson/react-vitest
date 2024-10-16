import Card from '../card/Card';

export function Grid({ name }: { name?: string }) {
  return (
    <div>
      Hello {name ? name : ''}
      <Card />
    </div>
  );
}
