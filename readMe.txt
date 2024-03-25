1. Create the folder project 
2. Copy all the code into the folder project 
3. In the main.tf file replace module source directory from /home/cloud/project/modules/ to respective directory from your environment. 
4. From project folder run below commands sequentially 
	1. terraform init --var-file="dev.tfvars"
	2. terraform plan --var-file="dev.tfvars"
	3. terraform apply --var-file="dev.tfvars"
