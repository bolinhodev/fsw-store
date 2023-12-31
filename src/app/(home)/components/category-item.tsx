import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";
import { CATEGORY_ICON } from "@/constants/category-icon";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant="outline" className="flex items-center justify-center gap-2 rounded-lg py-3">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="font-bold text-xs">{category.name}</span>
            </Badge>
        </Link>
    );
}
 
export default CategoryItem;