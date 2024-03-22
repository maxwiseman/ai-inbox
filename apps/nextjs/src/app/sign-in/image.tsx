"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Blurhash } from "react-blurhash";

import { queryOpts } from "~/lib";
import { api } from "~/trpc/react";

export function UnsplashImage({ ...props }): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true);
  const imageData = api.misc.getUnsplashImage.useQuery(undefined, queryOpts);
  // const unsplashUTM = `?utm_source=Inbox&utm_medium=referral&utm_campaign=api-credit`;
  const unsplashUTM = ``;

  useEffect(() => {
    if (imageData.isFetched) {
      const img = new Image();
      img.onload = () => {
        setLoading(false);
      };
      img.src = imageData.data?.urls.regular ?? "";
    }
  }, [imageData.data?.urls.regular, imageData.isFetched]);

  return (
    <div {...props}>
      <p className="absolute bottom-0 right-0 z-50 m-5 text-right text-white">
        <Link
          className="hover:underline"
          href={`https://unsplash.com/photos/${imageData.data?.id}${unsplashUTM}`}
          target="_blank"
        >
          Photo
        </Link>{" "}
        by <br />
        <Link
          className="hover:underline"
          href={imageData.data?.user.links.html + unsplashUTM || ""}
          target="_blank"
        >
          {imageData.data?.user.name}
        </Link>{" "}
        via{" "}
        <Link
          className="hover:underline"
          href={`https://unsplash.com${unsplashUTM}`}
          target="_blank"
        >
          Unsplash
        </Link>
      </p>
      {imageData.data?.blur_hash && loading ? (
        <Blurhash
          className="absolute"
          hash={imageData.data.blur_hash}
          height="100%"
          width="100%"
        />
      ) : null}
      {!loading ? (
        // eslint-disable-next-line @next/next/no-img-element -- Servers = $$$
        <img
          alt={imageData.data?.alt_description}
          className="absolute h-[100%] max-h-[100vh] w-[100%] object-cover object-center"
          // title={
          //   imageData.data?.location?.name ||
          //   imageData.data?.description ||
          //   imageData.data?.user?.username ||
          //   "Unsplash Image"
          // }
          src={imageData.data?.urls.regular}
        />
      ) : null}
    </div>
  );
}
