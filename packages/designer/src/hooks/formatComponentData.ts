import generateID from '@/utils/generateID';
import type { ComponentModel } from '@/types/component';

// 生成组件数据
export const initCompDataByDrop = (
	label: string,
	key: string,
	style: any,
	top: number,
	left: number
) => {
	const component: ComponentModel = {
		id: generateID(),
		label,
		key,
		style: { ...style, top, left }
	};
	if (key === 'WdForm') component.children = [];
	return component;
};
