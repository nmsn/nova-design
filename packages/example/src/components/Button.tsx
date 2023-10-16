import { Button } from "reborn-ui";

const ButtonPage = () => {
  return (
    <div className="space-y-2">
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <Button type="info">Info</Button>
      </div>
      <div className="fscw gap-2">
        <Button light>Default</Button>
        <Button light type="primary">
          Primary
        </Button>
        <Button light type="secondary">
          Secondary
        </Button>
        <Button light type="success">
          Success
        </Button>
        <Button light type="warning">
          Warning
        </Button>
        <Button light type="error">
          Error
        </Button>
        <Button light type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button disabled type="primary">
          Primary
        </Button>
        <Button disabled type="secondary">
          Secondary
        </Button>
        <Button disabled type="success">
          Success
        </Button>
        <Button disabled type="warning">
          Warning
        </Button>
        <Button disabled type="error">
          Error
        </Button>
        <Button disabled type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button rounded type="primary">
          Primary
        </Button>
        <Button rounded type="secondary">
          Secondary
        </Button>
        <Button rounded type="success">
          Success
        </Button>
        <Button rounded type="warning">
          Warning
        </Button>
        <Button rounded type="error">
          Error
        </Button>
        <Button rounded type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button dashed type="primary">
          Primary
        </Button>
        <Button dashed type="secondary">
          Secondary
        </Button>
        <Button dashed type="success">
          Success
        </Button>
        <Button dashed type="warning">
          Warning
        </Button>
        <Button dashed type="error">
          Error
        </Button>
        <Button dashed type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button text type="primary">
          Primary
        </Button>
        <Button text type="secondary">
          Secondary
        </Button>
        <Button text type="success">
          Success
        </Button>
        <Button text type="warning">
          Warning
        </Button>
        <Button text type="error">
          Error
        </Button>
        <Button text type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button>Default</Button>
        <Button shadow type="primary">
          Primary
        </Button>
        <Button shadow type="secondary">
          Secondary
        </Button>
        <Button shadow type="success">
          Success
        </Button>
        <Button shadow type="warning">
          Warning
        </Button>
        <Button shadow type="error">
          Error
        </Button>
        <Button shadow type="info">
          Info
        </Button>
      </div>
      <div className="fscw gap-2">
        <Button size="xs">Default</Button>
        <Button size="sm" type="primary">
          Primary
        </Button>
        <Button size="md" type="secondary">
          Secondary
        </Button>
        <Button size="lg" type="success">
          Success
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
