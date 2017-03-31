import {Entity} from "../../../../../../src/decorator/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../../../src/decorator/columns/Column";
import {OneToOne} from "../../../../../../src/decorator/relations/OneToOne";
import {Post} from "./Post";
import {RelationId} from "../../../../../../src/decorator/relations/RelationId";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Post, post => post.tag2)
    post: Post;

    @RelationId((tag: Tag) => tag.post)
    postId: number;

}