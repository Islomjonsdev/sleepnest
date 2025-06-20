import { Input } from "@/components/ui/input";
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Collection = () => {
  return (
    <div className="mt-[50px]">
      <div className="max-w-[1440px] mx-auto px-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="relative">
              <Input
                className="relative"
                type="search"
                placeholder="Searching for..."
              />
              <Button className="absolute top-0 right-[15px] top-[10px] rounded-full bg-[red] w-[46px] h-[46px] cursor-pointer">
                <Search />
              </Button>
            </div>
          </div>
          <div className="bg-[blue] md:col-span-2">salom</div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
