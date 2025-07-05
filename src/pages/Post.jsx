import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    // console.log(userData);

    const isAuthor = post && userData ? post.userId === userData.userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="flex gap-3 max-xs:flex-col">
                    <div className="w-1/2 max-xs:w-full flex justify-center mb-4 relative border rounded-xl p-2">
                        <img
                            src={service.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl w-full h-full object-contain "
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`} state={{ post }}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col w-1/2 max-xs:w-full h-fit px-4">

                        <div className="w-full mb-6 text-coral">
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                        </div>
                        <div className="browser-css text-neutral-400">
                            {parse(post.content)}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    ) : null;
}