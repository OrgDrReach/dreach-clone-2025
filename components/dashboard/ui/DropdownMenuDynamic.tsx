import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
} from "@/components/ui";
import React from "react";

interface DropdownMenuDynamicProps {
  menuItems: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  labelName: string | undefined;
  htmlFor: string;
  name: string;
}

const DropdownMenuDynamic: React.FC<DropdownMenuDynamicProps> = ({
  menuItems,
  value,
  onChange,
  label,
  labelName,
  htmlFor,
  name,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Label htmlFor={htmlFor}>{labelName}</Label>
          <Input
            type="text"
            placeholder={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
            className="w-fit"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuGroup>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem onSelect={() => onChange(item.value)}>
                {item.label}
              </DropdownMenuItem>
              {index < menuItems.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuDynamic;
