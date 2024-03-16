"use client";

import type { HTMLAttributes } from "react";
import { useCallback, useState } from "react";
import { IconFile, IconFileUpload, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

import { cn } from ".";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Separator } from "./separator";

function DropZone({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles([...files, ...acceptedFiles]);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- its fine
  }, []);
  const dropzone = useDropzone({
    onDrop,
    onError: () => {
      toast.error("File couldn't be uploaded!", {
        description: "Check the file size and try again.",
      });
    },
  });
  return (
    <div
      {...props}
      className={cn(
        "flex h-full w-full flex-row gap-0",
        { "gap-4": files.length > 0 },
        className,
      )}
    >
      <Card
        {...dropzone.getRootProps()}
        className="flex grow cursor-pointer items-center justify-between gap-4 border-2 border-dashed border-border p-12 py-24 transition-all duration-300 hover:border-muted-foreground hover:bg-muted"
      >
        <div>
          <p className="text-xl font-bold">Drop a file here</p>
          <p className="text-muted-foreground">
            Or click anywhere to select a file
          </p>
        </div>
        <IconFileUpload className="h-20 min-h-0 w-20 text-muted-foreground" />
      </Card>
      <Card
        className={cn(
          "flex w-96 flex-col justify-between overflow-hidden transition-all",
          {
            "w-0 opacity-0": files.length === 0,
          },
        )}
      >
        <div>
          <CardHeader>
            <CardTitle>Selected Files</CardTitle>
          </CardHeader>
          <CardContent>
            {files.map((file) => (
              <li
                className="line-clamp-1 flex list-none flex-row items-center justify-between"
                key={
                  file.name +
                  file.size +
                  file.type +
                  file.lastModified +
                  file.webkitRelativePath
                }
              >
                {file.name}
                <IconX
                  className="h-5 w-5 cursor-pointer text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => {
                    setFiles(files.filter((f) => f.name !== file.name));
                  }}
                />
              </li>
            ))}
          </CardContent>
        </div>
        <div>
          <Separator />
          <CardFooter className="flex w-full flex-row justify-between py-4">
            <div className="flex flex-row items-center gap-2 text-muted-foreground">
              <IconFile className="h-5 w-5" /> {files.length} file
              {files.length > 1 && "s"} selected
            </div>
            <Button
              onClick={() => {
                toast.warning("You're early!", {
                  description: "This feature hasn't been implemented yet.",
                });
              }}
            >
              Submit
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

DropZone.displayName = "DropZone";

export { DropZone };
