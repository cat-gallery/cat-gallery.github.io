import { useQuery, useQueryClient } from "@tanstack/react-query"
import IImageInfo from "../../logic/IImageInfo"
import ImageGrid from "../../ui/ImageGrid/ImageGrid"
import Panel from "../Panel/Panel"
import BASE_URL from "../../logic/BaseURL"
import { useEffect } from "react"
import Spinner from "../../ui/Spinner/Spinner"
import SpinnerWrapper from "../../ui/SpinnerWrapper/SpinnerWrapper"

const Panels = () => {

    const queryClient = useQueryClient();

    const { status, data } = useQuery({
        queryKey: ['imagesInfo'],
        queryFn: async (): Promise<IImageInfo[]> => {
            const response = await fetch("imagesInfo.json");
            return await response.json() as IImageInfo[];
        },
        staleTime: 3000
    });

    useEffect(() => {
        if (status === "success")
            console.log(data);
    }, [status])

    return (
        <div>
            {
                status === "success"
                    ? (
                        <ImageGrid>
                            {data?.slice(1).map(image =>
                                <Panel key={image.name + Date.now() + Math.random()}
                                    imageInfo={image} />
                            )}
                        </ImageGrid>
                    )
                    : (
                        <SpinnerWrapper>
                            <Spinner></Spinner>
                        </SpinnerWrapper>
                    )
            }


        </div>
    )
}

export default Panels;